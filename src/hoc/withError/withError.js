import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxi'
import useHttpError from '../../hooks/httpError';

const withError = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpError(axios);

            return (
                <Aux>
                    <Modal 
                    show={error}
                    modalClosed={clearError}>
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent {...props} />
                </Aux>         
            )
        }
    }

export default withError;