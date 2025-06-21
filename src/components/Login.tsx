import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { logimg } from '../assets/images';
import { schema } from '../schema/auth';


export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log('Login Data:', data);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 bg-gradient-to-br from-[#eef0ff] to-gray-100">
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 w-full p-6 max-w-6xl rounded-3xl shadow-2xl overflow-hidden bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side */}
        <motion.div
          className=" p-10 flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1 className="text-4xl font-bold mb-2" variants={itemVariants}>
            Welcome
          </motion.h1>
          <motion.p className="text-gray-500 mb-6" variants={itemVariants}>
            We are glad to see you back with us
          </motion.p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <motion.input
              type="text"
              placeholder="Username"
              {...register('username')}
              className="px-4 py-3 border border-gray-300 rounded-xl w-full focus:outline-none"
              variants={itemVariants}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}

            <motion.input
              type="password"
              placeholder="Password"
              {...register('password')}
              className="px-4 py-3 border border-gray-300 rounded-xl w-full focus:outline-none"
              variants={itemVariants}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}

            <motion.button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              variants={itemVariants}
            >
              NEXT
            </motion.button>
          </form>

          <motion.div className="text-center text-gray-500 my-4" variants={itemVariants}>
            Login with Others
          </motion.div>

          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
              <span className="font-medium">Login with Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl">
              <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-5 h-5" />
              <span className="font-medium">Login with Facebook</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hidden xl:flex rounded-[40px] relative items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${logimg})`}}
          variants={itemVariants}
        >
       <motion.div
            className="absolute bottom-10 left-10 bg-[#2e2e2e]/70 text-white p-6 rounded-2xl backdrop-blur-sm max-w-md"
            variants={itemVariants}
          >
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 mb-2">
              <span className="text-lg">👍</span> Top Notch Stock Resources
            </div>
            <p className="text-sm">
              Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}










// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { logimg } from '../assets/images';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const containerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-[#8c7b7b] flex items-center justify-center px-4">
//       <motion.div
//         className="bg-white rounded-[40px] overflow-hidden shadow-xl grid grid-cols-1 xl:grid-cols-2 w-full max-w-7xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Left Side */}
//         <motion.div
//           className="p-10 xl:p-16 flex flex-col justify-center gap-4"
//           variants={itemVariants}
//         >
//           <motion.h1 className="text-6xl font-extrabold leading-tight" variants={itemVariants}>
//             Welcome
//           </motion.h1>
//           <motion.p className="text-lg text-gray-500" variants={itemVariants}>
//             We are glad to see you back with us
//           </motion.p>

//           <motion.input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="mt-4 px-4 py-3 border border-gray-300 rounded-xl w-full focus:outline-none text-base"
//             variants={itemVariants}
//           />

//           <motion.input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-2 px-4 py-3 border border-gray-300 rounded-xl w-full focus:outline-none text-base"
//             variants={itemVariants}
//           />

//           <motion.button
//             className="mt-4 w-full bg-black text-white py-3 rounded-xl font-semibold tracking-wide hover:bg-gray-800 transition"
//             variants={itemVariants}
//           >
//             NEXT
//           </motion.button>

//           <motion.hr className="my-6 border-gray-300" variants={itemVariants} />

//           <motion.div className="text-center text-base font-semibold text-gray-500 mb-2" variants={itemVariants}>
//             Login with Others
//           </motion.div>

//           <motion.div className="flex flex-col gap-4" variants={itemVariants}>
//             <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl">
//               <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
//               <span className="text-sm font-semibold">Login with <span className="font-bold">google</span></span>
//             </button>

//             <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl">
//               <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-5 h-5" />
//               <span className="text-sm font-semibold">Login with <span className="font-bold">Facebook</span></span>
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           className="hidden xl:flex items-center justify-center bg-cover bg-center relative"
//           style={{ backgroundImage:`url(${logimg})` }}
//           variants={itemVariants}
//         >
        //   <motion.div
        //     className="absolute bottom-10 left-10 bg-[#2e2e2e]/70 text-white p-6 rounded-2xl backdrop-blur-sm max-w-md"
        //     variants={itemVariants}
        //   >
        //     <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 mb-2">
        //       <span className="text-lg">👍</span> Top Notch Stock Resources
        //     </div>
        //     <p className="text-sm">
        //       Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.
        //     </p>
        //   </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }