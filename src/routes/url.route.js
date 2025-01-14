import { Router } from "express";
import { getWeather } from "../controllers/weather.controller.js";

const router = Router()


router.route("/location").get(getWeather)

export default router;