import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './style/FormUser.css'
const FormUsers = ({createNewUsers,UpdateInfo,UpdateInfoByid,setUpdateInfo,setisCloseForm}) => {
  const {register,reset,handleSubmit}=useForm()
  useEffect(()=>{
    reset(UpdateInfo)
  },[UpdateInfo])
  const submit=(data)=>{
    if(UpdateInfo){
      //actulizo
      UpdateInfoByid('/users',UpdateInfo.id,data)
      setUpdateInfo()
    }else{
      //creo
      createNewUsers('/users',data)
    }
    reset({
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      birthday:''
    });
    setisCloseForm(true);
    };
    const handleExit=()=>{
      reset({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        birthday:''
      });
      setisCloseForm(true);
      setUpdateInfo()
  }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h2 className='form__title'>form Users</h2>
      <div onClick={handleExit} className='form__x'><i class='bx bx-x'></i></div>
      <div className='form__section'>
        <label className='form__label' htmlFor="firstName">First name  </label>
        <input className='form__input' {...register('first_name')} id='firstName' type="text" />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="lastName">Last name  </label>
        <input className='form__input' {...register('last_name')} id='lastName' type="text" />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="email">Email  </label>
        <input className='form__input' {...register('email')} id='email' type="text" />
      </div>

      <div className='form__section'>
        <label className='form__label' htmlFor="password">Password  </label>
        <input className='form__input' {...register('password')} id='password' type="password" />
      </div>
      <div className='form__section'>
        <label className='form__label' htmlFor="birthday">Birthday </label>
        <input className='form__input' {...register('birthday')} id='birthday' type="date" />
      </div>
      <button className='form__btn'>{UpdateInfo ? 'update' :'create'}</button>
    </form>
  )
}

export default FormUsers