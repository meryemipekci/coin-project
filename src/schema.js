import * as yup from "yup";

// sifreyi kisitlamak ıcın kurallar
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//dogrulama semasi olusturma:
export const schema = yup.object().shape({
  //email icin zorunluluklari belirleme
  email: yup
    .string()
    .email("Lutfen gecerli bir mail giriniz")
    .required("Zorunlu alan"),
  age: yup
    .number()
    .min(18, "18 yasından kucukler giremez")
    .max(100, "100 yasından buyuk olamaz")
    .integer("Lutfen tam sayı giriniz"),
  password: yup
    .string()
    .min(5, "Sifre en az 5 karakter olmali")
    //yazı belirledigimiz kurallarla eslesiyor mu bakar
    .matches(regex, "Sifreniz yeterince guclu degil"),

  confirm_password: yup
    .string()
    //oneOf : elemanın degeri verilen degerlerden biriyle eslesiyor
    .oneOf(
      //ref: farkli bit inputtan veri cagirmaya yarar
      [yup.ref("password")],
      "Sifre eslesmiyor"
    )
    .required("Zorunlu Alan"),
});
console.log(yup);
