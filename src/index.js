import style from "./style.css";
import { form } from "./form";

const Form = new form();
let newForm = Form.build();
const main = document.querySelector("main");
main.appendChild(newForm);
