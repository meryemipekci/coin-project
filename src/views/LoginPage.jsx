import { useFormik } from "formik";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  //useformik formik ozelliklerini kullanmamaızı saglayan hook
  const formik = useFormik({
    //formda tutulacak verilerin ilk degerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    //formun gonderilme olayında calisir
    onSubmit: async (values, actions) => {
      //api simulasyonu
      await new Promise((resolve) => setTimeout(resolve, 1900));

      console.log(actions);

      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
      //anasayfaya yonlendir
      navigate("/home");

      //formu temizler
      actions.resetForm();
    },

    //dogrulama semasi
    validationSchema: schema,
  });
  console.log(formik.isSubmitting);
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/coin-logo.webp" alt="logo" />
          <h2>Coinmania</h2>
        </div>

        {/* form alani */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
// input icin dizi olusturma
const inputs = [
  {
    label: "email",
    name: "email",
    type: "email",
  },
  {
    label: "Yas",
    name: "age",
    type: "number",
  },
  {
    label: "Sifre",
    name: "password",
    type: "password",
  },
  {
    label: "Sifre Onay",
    name: "confirm_password",
    type: "password",
  },
];
//input alanı bileseni

const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {/* email ile ilgili hata varsa ekrana bas */}
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
