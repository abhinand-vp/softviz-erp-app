import {
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import "./signup.css";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [age, setAge] = useState("");

    const handleChange = (e) => {
        setAge(e.target.value);
    };
    const [forms, setforms] = useState(1);
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is a required field"),
        password: yup
            .string()
            .required("Password must be at least 8 characters")
            .min(8, "Password is too short - Should be 8 chars minimum"),
    });

    const newuserSchema = yup.object().shape({
        first_name: yup.string().required("First Name Required"),
        last_name: yup.string().required("First Name Required"),
        email1: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is a required field"),
        company: yup.string().required("Company Name Required"),
        base_currency: yup.string().required("Currency Required"),
        mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    });
    const recovery_emial_schema = yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is a required field"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const {
        register: register1,
        formState: { errors: errors1 },
        handleSubmit: handleSubmit1,
        control,
    } = useForm({
        resolver: yupResolver(newuserSchema),
    });

    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
    } = useForm({
        resolver: yupResolver(recovery_emial_schema),
    });

    const onSubmit = (data) => {
        reset();
        alert(JSON.stringify(data));
        navigate("/dashboard");
    };
    const onSubmit1 = (data) => {
        alert(JSON.stringify(data));
    };
    const onSubmit2 = (data) => {
        alert(JSON.stringify(data));
    };

    return (
      <div className="signup_page">
        <div className="signup_page_left">
          {forms == 1 && (
            <div>
              <h4>Softviz</h4>
              <h3>
                Welcome Back! <br />
                <span> Sign in</span> to Your Account
              </h3>
              <p>
                Unlock a world of possibilities. <span>Sign in</span> for a
                seamless, <br /> personalized experience. Let's begin!
              </p>
            </div>
          )}
          {forms == 2 && (
            <div>
              <h4>Softviz</h4>
              <h3>
                Get Your FREE <br />
                <span>30-Days Trial</span> Now!
              </h3>
              <p>
                Unlock exclusive access today! Sign up now for your <br />{" "}
                <span> FREE 30-day trial</span> and experience the full benefits
                of our <br />
                premium services. No strings attached.
                <br />
                Don't miss out - get started now!
              </p>{" "}
            </div>
          )}
          {forms == 3 && (
            <div>
              <h4>Softviz</h4>
              <h3>
                Unlock Your Access <br />
                <span className="resent_big_font">
                  {" "}
                  Reset Your <br /> Password{" "}
                </span>
              </h3>
            </div>
          )}
        </div>
        <div className="signup_page_right">
          {forms == 1 && (
            <div className="signup_page_right_01">
              <h3>sign in to softViz</h3>
              <div className="signup_google_facebook">
                <button>
                  <img src="/image/ic_google logo.png" />
                  Sign in With Google
                </button>
                <div className="signup_fb_button">
                  <img src="/image/ic_fb logo.png" alt="" />
                </div>
              </div>
              <hr className="or_hr_line" />
              {/* <div className="or_hr">
                            <hr className="or_hr_line" />
                            <p>or</p>
                            <hr className="or_hr_line" />
                        </div> */}
              <form key={1} onSubmit={handleSubmit(onSubmit)}>
                <div className="signup_inputboxes">
                  <TextField
                    {...register("email", { required: true })}
                    label="Email"
                    fullWidth
                    variant="outlined"
                    type="text"
                  />
                  <p className="error_message">{errors.email?.message}</p>
                  <TextField
                    {...register("password", { required: true })}
                    label="password"
                    fullWidth
                    variant="outlined"
                    type="text"
                  />
                  <p className="error_message">{errors.password?.message}</p>
                </div>
                <div className="sign_uo_forget">
                  <p onClick={() => setforms(3)}>Forgot Password</p>
                  <button type="submit">Sign in</button>
                </div>
              </form>
              <p className="bottam">
                Protected by reCAPTCHA and subject to the{" "}
                <span> SoftViz Privacy Policy</span> and{" "}
                <span>Terms of Service.</span>
              </p>
              <p onClick={() => setforms(2)} className="new_user_p">
                New User? <span>Create a Account</span>
              </p>
            </div>
          )}
          {forms == 2 && (
            <div className="sign_up_form_2">
              <h3>Sign up now to start your free trial.</h3>
              <p>
                Already Have Account? &nbsp;{" "}
                <span onClick={() => setforms(1)}>sign in</span>
              </p>
              <div>
                <form key={2} onSubmit={handleSubmit1(onSubmit1)}>
                  <div className="signup_2_fields_line">
                    <div>
                      <TextField
                        {...register1("first_name", { required: true })}
                        label="First Name"
                        fullWidth
                        variant="outlined"
                        type="text"
                        sx={{ background: "#FFF" }}
                      />
                      <p className="error_message">
                        {errors1.first_name?.message}
                      </p>
                    </div>
                    <div>
                      <TextField
                        {...register1("last_name", { required: true })}
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                        type="text"
                        sx={{ background: "#FFF" }}
                      />
                      <p className="error_message">
                        {errors1.last_name?.message}
                      </p>
                    </div>
                  </div>
                  <div className="signup_2_fields_line">
                    <div>
                      <TextField
                        {...register1("email1", { required: true })}
                        label="Email"
                        fullWidth
                        variant="outlined"
                        type="text"
                        sx={{ background: "#FFF" }}
                      />
                      <p className="error_message">{errors1.email1?.message}</p>
                    </div>
                    <div>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Title
                        </InputLabel>
                        <Select
                          {...register1("job_title", { required: true })}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Job Title"
                          onChange={handleChange}
                          sx={{ background: "#FFF" }}
                          control={control}
                        >
                          <MenuItem value={1}>Job1</MenuItem>
                          <MenuItem value={2}>Job2</MenuItem>
                          <MenuItem value={3}>Job3</MenuItem>
                        </Select>
                      </FormControl>
                      <p className="error_message">
                        {errors1.job_title?.message}
                      </p>
                    </div>
                  </div>
                  <TextField
                    {...register1("company", { required: true })}
                    label="Company"
                    fullWidth
                    variant="outlined"
                    type="text"
                    sx={{ background: "#FFF" }}
                  />
                  <p className="error_message">{errors1.company?.message}</p>
                  <TextField
                    {...register1("base_currency", { required: true })}
                    label="Base Currency"
                    fullWidth
                    variant="outlined"
                    type="text"
                    sx={{ background: "#FFF" }}
                  />
                  <p className="error_message">
                    {errors1.base_currency?.message}
                  </p>
                  <div className="signup_2_fields_line">
                    <div>
                      <TextField
                        {...register1("mobile", { required: true })}
                        label="Mobile"
                        fullWidth
                        variant="outlined"
                        type="text"
                        sx={{ background: "#FFF" }}
                      />
                      <p className="error_message">{errors1.mobile?.message}</p>
                    </div>
                    <div>
                      <TextField
                        {...register1("country", { required: true })}
                        label="Country"
                        fullWidth
                        variant="outlined"
                        type="text"
                        sx={{ background: "#FFF" }}
                      />
                      <p className="error_message">
                        {errors1.country?.message}
                      </p>
                    </div>
                  </div>
                  <button type="submit">Start Free Trail</button>
                </form>
                <Checkbox />{" "}
                <span className="agreement">
                  I agree to the{" "}
                  <span className="masetr_sub">
                    Master Subscription Agreement.
                  </span>
                </span>
                <hr />
                <p className="signup_footer_content">
                  By registering, you consent to SoftViz processing your
                  personal data in accordance with our Privacy Policy.
                </p>
              </div>
            </div>
          )}
          {forms == 3 && (
            <div className="sign_up_form_3">
              <h4>Forget Password</h4>
              <p>
                No worriest! Just enter your email and we’ll send you a reset{" "}
                 password link.
              </p>
              <form key={3} onSubmit={handleSubmit2(onSubmit2)}>
                <TextField
                  {...register2("email", { required: true })}
                  label="Recovery Email"
                  fullWidth
                  variant="outlined"
                  type="text"
                />
                <p className="error_message">{errors2.email?.message}</p>
                <button type="submit">Send Recovery Mail</button>
              </form>
              <p className="sign_up_form_3_bottom_signup">
                Just remember &nbsp;{" "}
                <span onClick={() => setforms(1)}>Sign in</span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
};

export default Signup;