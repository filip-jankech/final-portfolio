
import React from "react"
import { navigate } from 'gatsby'
import { Formik, useField, Form } from 'formik'
import * as Yup from 'yup'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ name, style }) => {

  const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
      <>
        <input className="form__text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="form__error">{meta.error}</div>
        ) : null}
      </>
    )
  }

  const CustomTextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
      <>
        <textarea className="form__text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="form__error">{meta.error}</div>
        ) : null}
      </>
    )
  }

  return (
    <Formik 
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Meno musí obsahovať aspoň 3 znaky.')
          .required('Uveďte prosím svoje meno.'),
        email: Yup.string()
          .email('Neplatná emailová adresa.')
          .required('Uveďte prosím svoju emailovú adresu.'),
        message: Yup.string()
          .min(3, 'Správa musí obsahovať aspoň 3 znaky.')
          .required('Uveďte prosím Vašu správu.')
      })}
      onSubmit={( data, { resetForm }) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": name,
            ...data,
          }),
        })
          .then(() => {
            resetForm();
            navigate("/odoslane")
          })
          .catch(() => alert("Odosielanie správy sa nepodarilo. Môžete ma kontaktovať priamo na adrese filip.jankech@gmail.com."))
      }}
    >
      {props => (
        <Form 
          name={name}
          style={style}
          className="contact__form" 
          method="post" 
          data-netlify="true" 
          action="/odoslane"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value={name} />
          <p hidden>
            <label>
              Toto pole nevyplňujte: <input name="bot-field" />
            </label>
          </p>
          <CustomTextInput name="name" type="text" placeholder="Vaše meno" />
          <CustomTextInput name="email" type="email" placeholder="Váš email" />
          <CustomTextareaInput name="message" as="textarea" rows="8" placeholder="Vaša správa" />
          <div className="form__submit">
            <button type="submit">{props.isSubmitting ? 'Odosielam...' : 'Odoslať'}</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm