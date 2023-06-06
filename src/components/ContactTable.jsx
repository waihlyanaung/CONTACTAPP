import React from 'react'
import { Table } from '@mantine/core';
import { useDeleteContactMutation, useGetContactsQuery } from '../features/api/contactApi';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContacts } from '../features/services/contactSlice';

const ContactTable = () => {
    const token = Cookies?.get("token");


    // delete step2
    // const { deleteContact} = useDeleteContactMutation();
    const [deleteContact] = useDeleteContactMutation()
    const deleteHandler = async () => {


        const deleteData = await deleteContact()

    }
    const { data } = useGetContactsQuery(token);

    const dispatch = useDispatch();
    const contacts = useSelector((state) => state?.contactSlice?.contacts);
    const searchTerm = useSelector((state) => state?.contactSlice?.searchTerm);
    useEffect(() => {
        dispatch(addContacts(data?.contacts?.data));
    }, [data]);



    console.log(data);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>

            <tbody>


                {data?.contacts?.data.filter((item) => {
                    if (searchTerm === "") {
                        return item;
                    } else if (
                        item?.name
                            .toLowerCase()
                            .includes(searchTerm?.toLocaleLowerCase())
                    ) {
                        return item;
                    }
                })
                    ?.

                    map((contact) => {
                        return (
                            <tr key={contact?.id}>
                                <td>{
                                    contact?.email
                                }</td>
                                <td>{
                                    contact?.name
                                }</td>
                                <td>{
                                    contact?.phone
                                }</td>
                                <td>{
                                    contact?.address
                                }</td>
                                <td>
                                    <p
                                        onClick={async () => await deleteContact({ id: contact?.id, token })} className='cursor-pointer'>delete</p>
                                    <Link to="/editcontact"><p className='cursor-pointer'>edit</p></Link>
                                </td>
                            </tr>
                        );
                    }
                    )
                }


            </tbody>

        </Table>
    )
}

export default ContactTable