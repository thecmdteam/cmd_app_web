import React from 'react'

const WriteStory = () => {

        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>Write A Story</h2>
                <form action="">
                    <div className="writeStoryForm">

                        <input type="text" placeholder='Title' className='form-control my-3' required/>
                        <textarea name="details" class="form-control" id="textarea" required placeholder='Post Details (at least 250 words)'></textarea>
                        <input type="submit" className='mt-2' value="Submit" id='writeStorySubmitBtn' />
                    </div>
                </form>
            </div>
        )
}

export default WriteStory
