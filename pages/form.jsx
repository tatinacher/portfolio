import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function Form() {
  const url =
    "https://gmail.us8.list-manage.com/subscribe/post?u=83fef41166c60da9abfe81aba&amp;id=d376d61bd5&amp;f_id=004816e1f0";
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          autoFocus
          type="email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
        />
        <button>submit</button>
      </form>
      {loading && "submitting"}
      {error && message}
      {success && message}
    </div>
  );
}
