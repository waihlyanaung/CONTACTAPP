import React from 'react'
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCreateContactMutation } from '../features/api/contactApi';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',

      phone: '',
      address: '',
    },
  });

  const [createContact] = useCreateContactMutation();
  const token = Cookies.get("token");
  // console.log(token)
  const navigate = useNavigate();
  return (
    <div>
   

<form
      onSubmit={form.onSubmit(async (values) => {
        try {
          const contactData = await createContact({ token, data: values });
          console.log(contactData);
          if (contactData?.data.success) navigate("/");
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
      })}
    >
        <div>
        <Box maw={320} mx="auto">
          <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
          <TextInput withAsterisk mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
          <TextInput withAsterisk mt="md" label="Phone Number" placeholder="Phone Number" {...form.getInputProps('phone')} />
          <TextInput withAsterisk mt="md" label="Address" placeholder="Address" {...form.getInputProps('address')} />

          <Group position="center" mt="xl">
            <Button type="submit" variant="outline" fullWidth mt="xl">
              Create
            </Button>
          </Group>
        </Box>
        </div>
        </form>
    </div>



  )
}

export default CreateContact






// import React, { useState } from 'react';
// import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { useCreateContactMutation } from '../features/api/contactApi';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const CreateContact = () => {
//   const form = useForm({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//     },
//   });

//   const [createContact] = useCreateContactMutation();
//   const token = Cookies.get("token");
//   const navigate = useNavigate();

//   // State variable to hold the submitted data
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = async (values) => {
//     try {
//       const contactData = await createContact({ token, data: values });
//       console.log(contactData);
//       if (contactData?.success) {
//         setSubmittedData(contactData);
//         navigate("/");
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle the error here
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <div>
//           <Box maw={320} mx="auto">
//             <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
//             <TextInput withAsterisk mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
//             <TextInput withAsterisk mt="md" label="Phone Number" placeholder="Phone Number" {...form.getInputProps('phone')} />
//             <TextInput withAsterisk mt="md" label="Address" placeholder="Address" {...form.getInputProps('address')} />

//             <Group position="center" mt="xl">
//               <Button type="submit" variant="outline" fullWidth mt="xl">
//                 Create
//               </Button>
//             </Group>
//           </Box>
//         </div>
//       </form>

//       {/* Display submitted data */}
//       {submittedData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Phone Number: {submittedData.phone}</p>
//           <p>Address: {submittedData.address}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateContact;
