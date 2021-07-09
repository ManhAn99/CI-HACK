import HeaderTag from "./component/header-tag.js";
import InputWrapper from "./component/input-wrapper.js";
import RegisterForm from "./component/register-form.js";
import LoginForm from "./component/login-form.js";
import HomeScreen from "./component/course/homeScreen.js";
import './navigo.js'
import { onAuthChanged } from "./modules/user.js";

onAuthChanged(user => {
    if(user) {
        router.navigate('/homeScreen')
    }
    else{
        router.navigate('/headerTag')
    }
})
