import { useState } from "react";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/usersActions';
import {useForm} from 'react-hook-form';


      
function Form() {
    
    const [status, setStatus] = useState(false); //Проверка этапа заполнения формы
    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const redirectToHomePage = () => {
        setTimeout(() => {
            window.location.href = "/news";
        }, 3000);
    };

    const onSubmit = (data) => {
        dispatch(registerUser(data.email, data.name));
    };

    return (
        <div className="content">
            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>

                {status && <p onClick={() => setStatus(false)} className="form_email">{email}<LuPencilLine /> </p>}

                <h2 className="form_title">
                    {status ? "Как к вам обращаться?" : "Подписаться на рассылку"}
                </h2>

                {status &&
                    <>
                        <div className="form_name">
                            <input {...register("name")} className="form-field" placeholder="Ваше имя" type="text" />
                        </div>
                        <button onClick={redirectToHomePage} className="form_btn" type="submit">Подписаться</button>
                    </>}
                {!status &&
                    <>
                        <input {...register("email")}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-field" placeholder="Введите Email" type="text" />
                        <div onClick={() => setStatus(true)} className="form_btn">Продолжить</div>
                        <Link to="/news">Уже есть подписка</Link>
                    </>}

            </form>
        </div>
    );
}   

export default Form;