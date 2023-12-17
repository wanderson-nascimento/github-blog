import { FormContainer, SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { GitContext } from "../../contexts/GitContext";
import { useContext } from "react";

type FormData = {
    query: string;
};

export function SearchForm() {
    const { fetchIssueList } = useContext(GitContext)
    const { register, handleSubmit } = useForm<FormData>();

    async function handleSearchIssue(data: any) {
        await fetchIssueList(data.query)
    }

    return (

        <SearchFormContainer>
            <section>
                <span>Publicações</span>
                <small>6 publicações</small>
            </section>
            <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
                <input
                    {...register("query")}
                    placeholder="Buscar conteúdo"
                    type="text"
                />
            </FormContainer>
        </SearchFormContainer>
    )
}