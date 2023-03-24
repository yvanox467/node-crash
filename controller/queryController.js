const Query = require("../models/query");

module.exports.index = (req, res) => {
  Query.find()
    .then((queries) => {
      res.status(200).json({
        data: queries,
        status: 200,
        message: "Queries fetched successfully",
      });
    })
    .catch((err) =>
      res
        .status(err.status)
        .json({ data: [], status: err.status, message: err.message })
    );
};

module.exports.show = (req, res) => {
  Query.findById(req.params.id)
    .then((inquiry) => {
      res.status(200).json({
        data: inquiry,
        status: 200,
        message: "Query fetched successfully",
      });
    })
    .catch((err) =>
      res
        .status(err.status)
        .json({ data: [], status: err.status, message: err.message })
    );
};

module.exports.store = (req, res) => {
  const query = new Query(req.body);

  query
    .save()
    .then((result) => {
      res.status(200).json({
        data: [result],
        status: 200,
        message: "Query sent successfully",
      });
    })
    .catch((err) =>
      res
        .status(err.status)
        .json({ data: [], status: err.status, message: err.message })
    );
};
