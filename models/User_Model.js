const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // object data

    username: {
        type: 'string',
        trim: true,
        unique: true,
        require: true,
    },
    password: {
        type: 'string',
        trim: true,
        requires: true,
    },
    email: {
        type: 'string',
        trim: true,
        requires: true,
    },
    Lesson_credit: {
        type: 'Number',
        default: 0,
        requires: true
    },
    user_picture: {
        type: 'String',
        default: 'https://res.cloudinary.com/itpat/image/upload/v1610040745/avatar/pmcbs7ziptc558xvwaig.jpg'
    },
    Provide_credit: {
        type: 'Number',
        default: 3,
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },

    // array data

    Subscriber_List: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    subscribe_List: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    User_Book: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    User_Course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    Live: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Live'
        }
    ],
    orderlist: {
        BookList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            }
        ],
        CourseList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
    },
    Buylist: {
        BookList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            }
        ],
        CourseList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
    }
})

module.exports = mongoose.model('User', UserSchema)