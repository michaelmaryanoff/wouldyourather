import React from 'react'

const LoginDropdown = () => {
    return (
        <form>
            <select class="ui dropdown">
                <option value="">User</option>
                <option value="0">Sarah Edo</option>
                <option value="1">Tyler McGinnis</option>
                <option value="2">John Doe</option>
            </select>
        </form>
    )
}

export default LoginDropdown;