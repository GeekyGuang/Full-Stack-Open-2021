"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getPatients());
});
router.post('/', (req, res) => {
    console.log('someone send a post');
    try {
        const newPaitent = (0, utils_1.default)(req.body);
        console.log(newPaitent);
        const addedPatient = patientService_1.default.addPatient(newPaitent);
        res.send(addedPatient);
    }
    catch (e) {
        if (e instanceof Error)
            res.status(400).send(e.message);
    }
});
exports.default = router;
