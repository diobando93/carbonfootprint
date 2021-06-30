const express = require("express");
const router = express.Router();

//item model
const Factor = require("../../models/Factors");
results = [];
//@route GET api/items
//@desc get all items
//@access Public

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
async function checkFactors(aux) {
  let aux1 = 0;
  results1 = [];
  for (key in aux.name) {
    aux1 = await Factor.find({ "values.name": aux.name[key] });
    x = aux1[0].values.co;
    y = aux1[0].values.ch;
    z = aux1[0].values.no;
    codosC = (x * parseFloat(aux.amount[key])) / 1000;
    metanoC = (y * parseFloat(aux.amount[key])) / 1000000;
    nodC = (z * parseFloat(aux.amount[key])) / 1000000;
    codeseC = codosC + metanoC * 25 + nodC * 265;
    results1.push(codeseC);
  }
  //console.log(results1);
  return results1;
}

router.get("/", (req, res) => {
  let names = [];
  Factor.find()

    //.sort({ date: -1 })
    .then((factors) => {
      //console.log(factors);
      for (key in factors) {
        names.push(factors[key].values.name);
      }
      //console.log(names);
      res.json(names);
    });
});

//@route POST api/items
//@desc create post
//@access Public

router.post("/", (req, res) => {
  let aux = req.body.requestData;
  checkFactors(aux).then((results) => res.json(results));
  //console.log(results);

  /*
  const foorLoop = async (_) => {
    for (key in aux.name) {
      Factor.find({ "values.name": aux.name[key] }).then((factors) => {
        //console.log(factors[0].values.co);
        //console.log(aux.amount[key]);
        x = factors[0].values.co;
        y = factors[0].values.ch;
        z = factors[0].values.no;
        codosC = (x * parseFloat(aux.amount[key])) / 1000;
        metanoC = (y * parseFloat(aux.amount[key])) / 1000000;
        nodC = (z * parseFloat(aux.amount[key])) / 1000000;
        codeseC = codosC + metanoC * 25 + nodC * 265;
        results.push(codeseC);
        //const numaux = await getcalculo(key);
        //console.log(results);
        //codosC = (x.co * parseFloat(amount.value)) / 1000;
        //metanoC = (x.ch * parseFloat(amount.value)) / 1000000;
        //nodC = (x.no * parseFloat(amount.value)) / 1000000;
        //codeseC = codosC + metanoC * 25 + nodC * 265;
        //console.log(factors[0].values.name);
        //res.json(result);
      });
      //console.log(results);
    }
  };
  //console.log(results);
  */
  //sconsole.log(aux.name);
  //for (key in aux.name) {
  //factores = Factor.find({ name: aux.values.name[key] });
  //console.log(aux.name[key]);
  //}
  //console.log(factores.values);
  //for (key in a)
  //const newFactor = new Factor({
  //values: req.body,
  //});
  //console.log(req.body);
  //res.json(factores);
  ///newFactor.save().then((factors) => res.json(factors));
});

//@route DELETE api/items
//@desc delete a item
//@access Public

router.delete("/:id", (req, res) => {
  Factor.findById(req.params.id)
    .then((factors) => factors.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
