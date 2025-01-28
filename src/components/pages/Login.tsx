import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser as handleLogin } from '@/store/slices/AuthSlice';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store'; // Import the AppDispatch type

// Define Zod schema for form validation
const FormSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
});
type Form = z.infer<typeof FormSchema>;

export const Login = () => {
//   const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type

  // React Hook Form initialization with Zod resolver
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doLogin = async (data: Form) => {
    try {
      // Dispatch login action using data from the form
      const response = await dispatch(handleLogin({ username: data.username, password: data.password, email: data.email })).unwrap();

      // If the response is successful, navigate to the profile page
      if (response) {
        console.log(response)
        // navigate("/profile"); // Redirect only if login is successful
      } else {
        throw new Error("Invalid login credentials.");
      }
    } catch (error: unknown) {
      // Here we handle the 'unknown' type for the error
      if (error instanceof Error) {
        setErrorMessage("Login failed: " + error.message); // Set error message if login fails
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const redirectToHomepage = () => {
    navigate("/shop"); // Redirect to homepage
  };

  return (
    <main className="login__main px-3 bg-color7">
      <button
        className="absolute left-0 top-0 text-text1 p-2 bg-text3 opacity-50 hover:opacity-100 transition"
        onClick={redirectToHomepage}
      >
        go back
      </button>
      <div className="login-wrapper">
        <div className="login-left">
          <h1>Welcome back!</h1>
          <form onSubmit={handleSubmit(doLogin)}>
            <div className="input-group">
              <input
                {...register('username')}
                type="text"
                placeholder="username"
                required
              />
              {errors.username && <div className="error">{errors.username.message}</div>}
            </div>
            <div className="input-group">
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                required
              />
              {errors.email && <div className="error">{errors.email.message}</div>}
            </div>
            <div className="input-group">
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                required
              />
              {errors.password && <div className="error">{errors.password.message}</div>}
            </div>
            <button type="submit" className="login-button">Log in</button>
            <p className="signup-text">
              not a member? <a href="/signup" className="signup-link">Sign up now</a>
            </p>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </form>
        </div>
        <div className="login-right hidden md:flex">
          <img src="https://res.cloudinary.com/dujdz2jbl/image/upload/v1731537067/frontend/uso5cjwmao189so9lutr.png" alt="Illustration" className="illustration hidden md:block" />
        </div>
      </div>
    </main>
  );
};
