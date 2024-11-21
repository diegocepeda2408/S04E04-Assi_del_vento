import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function AddEdit({ user, onSave }) {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset(user);
    } else {
      reset({ first_name: '', last_name: '', email: '', password: '', birthday: '' });
    }
  }, [user, reset]);

  const onSubmit = (dataForm) => {
    if (user) {
      onSave(dataForm, user.id);
    } else {
      onSave(dataForm);
    }
  };

  return (
    <div className="add-edit">
      <h2 className="add-edit__title">{user ? 'Update User' : 'Register User'}</h2>
      <form className="add-edit__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-edit__field">
          <label className="add-edit__label">First Name</label>
          <input
            className="add-edit__input"
            type="text"
            {...register('first_name')}
          />
        </div>

        <div className="add-edit__field">
          <label className="add-edit__label">Last Name</label>
          <input
            className="add-edit__input"
            type="text"
            {...register('last_name')}
          />
        </div>

        <div className="add-edit__field">
          <label className="add-edit__label">Email</label>
          <input
            className="add-edit__input"
            type="email"
            {...register('email')}
          />
        </div>

        <div className="add-edit__field">
          <label className="add-edit__label">Password</label>
          <input
            className="add-edit__input"
            type="password"
            {...register('password')}
          />
        </div>

        <div className="add-edit__field">
          <label className="add-edit__label">Birthday</label>
          <input
            className="add-edit__input"
            type="date"
            {...register('birthday')}
          />
        </div>

        <button className="add-edit__button" type="submit">
          {user ? 'Update' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default AddEdit;