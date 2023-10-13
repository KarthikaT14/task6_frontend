import React, { useState } from 'react';
export function Footer()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
    };
    return(
    <div id="f1" class="row text-center">
        <h3 id="msg">You can leave a message for me here..</h3>
        <br/><br/>
        <form onSubmit={handleSubmit}>
        <div>
        <br/>
            <table id="m1">
                <tr>
                    <td class="lab">
                        <label>Name:&ensp;</label>
                    </td>
                    <td>
                    <input class="in1" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td class="lab">
                        <label>Email:&ensp;</label>
                    </td>
                    <td>
                    <input  class="in1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td class="lab">
                        <label>Message:</label>
                    </td>
                    <td >
                        <textarea id="ta" type="text" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    </td>
                </tr>
                <br/>
            </table>
        </div>
        <button class="btn btn-outline-light" type="submit">Submit</button>
    </form>
    </div>
    )
}