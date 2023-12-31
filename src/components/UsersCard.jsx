import './style/UsersCard.css'
const UsersCard = ({ user,delteUserByid,setUpdateInfo,setisCloseForm}) => {
    const handleDelete=()=>{
        delteUserByid('/users',user.id)
    }
    const handleUpdate=()=>{
        setUpdateInfo(user)
        setisCloseForm(false)
    }
  return (
    <article className='article__card'>
        <br />
        <div className='principal__card'>
            <h2 className='title__card'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='lista'>
                <li className='primer__item'>
                    <span>Email: </span>
                    <span>{user.email}</span>
                </li>
                <li className='segundo_item'>
                    <span>Birthday: </span>
                    <span>{user.birthday}</span>
                </li>
            </ul>
            
        </div>
        <button className='delete_btn' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        <button className='update_btn' onClick={handleUpdate}><i className='bx bxs-edit'></i></button>
        
    </article>
  )
}

export default UsersCard