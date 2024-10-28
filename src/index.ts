import AOS from "aos";
import "aos/dist/aos.css";
import { softSkillsList } from "./data/soft_skill_list";

AOS.init();

softSkillsList.map((s) => console.log(s));
