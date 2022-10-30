import { useForm } from 'react-hook-form';

// CONTACTFORM interface
interface ContactFormProps {
    firstName: string;
    lastName: string;
    county?: string;
    email: string;
    telephone?: string;
    description?: string;
}

const ContactPage = () => {
    // STATE & VARIABLES
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    // EVENTS
    const onSubmit = ({ data }) => {
        console.log('form submitted');
    }
    return (
        <div className="contact">
            <form className="contact-form" onSubmit={handleSubmit(onsubmit)}>
                <div className='personal-details'>
                    <label>
                        <span>First Name</span>
                        <input type="text" {...register('firstName', {
                            required: 'First name is required',
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'First name must only contain letters'
                            }
                        })} />
                    </label>
                    <label>
                        <span>Last Name</span>
                        <input type="text" {...register('lastName', {
                            required: 'Last name is required',
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Last name must only contain letters'
                            }
                        })} />
                    </label>
                </div>


                <div className="contact-details">
                    <label>
                        <span>County</span>
                        <input type="text" {...register('county', {
                            pattern: {
                                value: /^[A-Za-z0-9\s,'-]*$/i,
                                message: 'Address must only contain letters, numbers, spaces, commas, apostrophes and hyphens'
                            }
                        })} />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" {...register('email', {
                            required: 'Email is required',
                            minLength: {
                                value: 6,
                                message: 'Email must be at least 6 characters'
                            },
                            maxLength: {
                                value: 30,
                                message: 'Email must be less than 30 characters'
                            },
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                message: 'Email must be a valid email address'
                            }
                        })} />
                    </label>
                    <label>
                        <span>Telephone</span>
                        <input type="telephone" {...register('telephone', {
                            minLength: {
                                value: 10,
                                message: 'Telephone must be at least 6 characters'
                            },
                            maxLength: {
                                value: 15,
                                message: 'Telephone must be less than 15 characters'
                            },
                            pattern: {
                                value: /^[0-9\s,'-]*$/i,
                                message: 'Telephone must only contain numbers, spaces, commas, apostrophes and hyphens'
                            }
                        })} />
                    </label>
                </div>

                <div className="description-details">
                    <label>
                        <span>Description</span>
                        <textarea {...register('description', {
                            minLength: {
                                value: 10,
                                message: 'Description must be at least 10 characters'
                            },
                            maxLength: {
                                value: 500,
                                message: 'Description must be less than 500 characters'
                            }
                        })} />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;