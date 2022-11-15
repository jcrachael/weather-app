import style from "./style.css";
import { form } from "./form";
import { userGeo } from "./userGeo";

const UserGeo = new userGeo();
UserGeo.build();

const Form = new form();
let newForm = Form.build();
const aside = document.querySelector("aside");
aside.appendChild(newForm);
