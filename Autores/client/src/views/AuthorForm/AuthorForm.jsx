import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from "react-router-dom";
import { createAuthor, getAuthor, editAuthor } from "../../services/author.service";

const AuthorForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState({
        fullName: ''
    });
    const [errorsResponse, setErrorsResponse] = useState();

    const getAuthorFromService = async () => {
        try {
            const data = await getAuthor(id);
            setAuthor(data.data.author);

        } catch(error) {
            console.log("getAuthorFromService", error)
            
        };
    };

    useEffect(() => {
        id && getAuthorFromService();
    }, [id]);

    const authorSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Debe ingresar un nombre al estudiante')
    });

    const sendNewAuthor = async (values) => {
        try {
            console.log("sendNewAuthor", values);
            id ? await editAuthor(id, values) : await createAuthor(values);
            navigate("/");
            
        } catch (error) {
            console.log("🚀 ~ file: StudentForm.js:61 ~ sendNewStudent ~ error", error.response.data.error)
            setErrorsResponse(error.response.data.error.errors)
        }
    };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <Formik
                enableReinitialize
                initialValues={author}
                validationSchema={authorSchema}
                onSubmit={sendNewAuthor}
            >
                {({ errors, touched }) => (
                    <Form>
                        <br/>
                        <label htmlFor="fullName">Name: </label>
                        <br/>
                        <Field name="fullName" />
                        {errors.fullName && touched.fullName ? (
                            <div>{errors.fullName}</div>
                        ) : null}
                        {errorsResponse?.fullName && (
                            <div>{errorsResponse.fullName.message}</div>
                        )}
                        <br/><br/>
                        <Button variant="primary" onClick={() => navigate("/")}>Cancel</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default AuthorForm;

