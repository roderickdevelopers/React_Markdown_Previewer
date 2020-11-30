import React from 'react';
import styles from 'components/dynamic/error/Error.module.scss';

function Error() {
    return (
        <div className={styles.error}>
            <p>You have gone to a route that is not available.</p> <p>Please click the back button to get back to work!</p>
        </div>
    );
}

export default Error;
