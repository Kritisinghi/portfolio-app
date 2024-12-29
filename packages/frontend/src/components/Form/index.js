import React, { useState, useEffect } from "react";
import validate from "./helper";
import "./style.css";

const Form = ({ data, onSubmit, apiResponse }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(true);

  /* On Mount iterate through form items and set the initia state */
  useEffect(() => {
    if (data) {
      const formState = {};
      data.forEach(
        (item) =>
          (formState[item.name] = { value: "", error: true, touched: false, pristine: false })
      );
      setForm(formState);
    }
  }, []);

  const formErrorStatus = () => {
    let err = [];
    for (let item in form) {
      if (form[item].error || !form[item].pristine) {
        err.push(form[item].error);
      }
    }
    setError([...err]);
  };

  const setFormData = (event, formItem, blur = false) => {
    let error = null;
    let obj = { ...form[formItem.name] };
    if (form[formItem.name].touched || blur) {
      error = validate(event.target.value, formItem);
    }
    if (blur) {
      obj.touched = true;
    }
    obj = { ...obj, value: event.target.value, error: error, pristine: true };
    setForm({ ...form, [formItem.name]: obj });
    formErrorStatus();
  };

  return (
    <>
      {" "}
      {apiResponse.error ? (
        <div className="alert alert-danger">
          <strong>{apiResponse.error}</strong>
        </div>
      ) : (
        ""
      )}
      {apiResponse.success ? (
        <>
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          <div className="alert alert-success alert-center">
            <strong>We have received your query.</strong>
          </div>
        </>
      ) : (
        <>
          <form>
            {data.map((formItem, i) => {
              switch (formItem.type) {
                case "input":
                  return (
                    <div key={i}>
                      <label htmlFor={formItem.name}>
                        {formItem.name}{" "}
                        {formItem.validation.required ? <span className="required">*</span> : ""}
                      </label>
                      <div className="input-block">
                        <input
                          type="text"
                          name={formItem.name}
                          onBlur={(e) => setFormData(e, formItem, true)}
                          onChange={(e) => setFormData(e, formItem)}
                          value={form[formItem.name] ? form[formItem.name].value : ""}
                        />
                        {form[formItem.name] ? (
                          <span className="error">{form[formItem.name].error}</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                case "textarea":
                  return (
                    <div key={i}>
                      <label htmlFor={formItem.name}>
                        {formItem.name}{" "}
                        {formItem.validation.required ? <span className="required">*</span> : ""}
                      </label>
                      <div className="input-block">
                        <textarea
                          rows={6}
                          name={formItem.name}
                          onBlur={(e) => setFormData(e, formItem, true)}
                          onChange={(e) => setFormData(e, formItem)}
                          value={form[formItem.name] ? form[formItem.name].value : ""}
                        />
                        {form[formItem.name] ? (
                          <span className="error">{form[formItem.name].error}</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                default:
                  return <></>;
              }
            })}
          </form>
          <div className="display-flex">
          <button
            disabled={!(error && error.length <= 0)}
            className="button is-primary is-rounded is-small is-filled btn-center-small"
            onClick={() => onSubmit(form)}
          >
            Submit
          </button>
          <a className="direct-mail-link" href="mailto:kritirajsinghi@gmail.com">Send me email directly</a>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
