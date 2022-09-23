import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePass = () => {

    let password;
 
 const { register, handleSubmit, formState: { errors }, reset,watch,getValues } = useForm({
     mode: "onTouched"
 });
 password = watch("password", "");
 
 const onSubmit = (data) => {
     
     console.log(data);
     reset();
 }