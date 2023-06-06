import React from 'react'
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useUpdateContactMutation } from '../features/api/contactApi';
import Cookies from 'js-cookie';
const EditContact = () => {


const[updateContact]=useUpdateContactMutation()
const token=Cookies.get("token");

    const form = useForm({
        initialValues: {
          name: '',
          email: '',
    
          phone: '',
          address: '',
        },
      });
  return (
    <div>
   

   <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          const contactData = await updateContact({ id:contact?.id,token });
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
                  Edit
                </Button>
              </Group>
            </Box>
            </div>
            </form>
        </div>
  )
}

export default EditContact