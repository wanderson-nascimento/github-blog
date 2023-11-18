import { FormContainer, SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

type FormData = {
    query: string;
};

export function SearchForm() {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    return (

        <SearchFormContainer>
            <section>
                <span>Publicações</span>
                <small>6 publicações</small>
            </section>
            <FormContainer onSubmit={onSubmit}>
                <input {...register("query")} />
            </FormContainer>
        </SearchFormContainer>
    )
}