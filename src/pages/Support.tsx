import { Form } from "../components/support/Form";
import img from '../assets/idosos4.png';

export function Support() {
    return (
        <div className="p-4 sm:px-6 lg:px-16 2xl:px-36 py-32 overflow-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:pt-36 md:pt-0 2xl:pt-10">
                <Form />
                
                <img src={img} alt="Mulher mexendo no celular" className="w-48 2xl:w-56 hidden sm:block"/>
            </div>
        </div>
    )
}