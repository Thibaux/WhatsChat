import {
    getFriendsUsername,
    GetFriendsUsernameInterface,
} from './getFriendsUsername';

describe('getFriendsUsername', () => {
    it('should return the friends username of which the logged user is in a chat with', () => {
        const friendsUsername = 'Klaasje';

        const data: GetFriendsUsernameInterface = {
            userObject: {
                _id: '12345',
                username: 'Pietje',
                email: 'pietje@gmail.com',
                picture: '',
                token: '',
            },
            chatUsers: ['12345', '67890'],
            users: [
                {
                    _id: '67890',
                    username: friendsUsername,
                    email: 'klaasje@gmail.com',
                    picture: '',
                    token: '',
                },
                {
                    _id: '45678',
                    username: 'Jantje',
                    email: 'jantje@gmail.com',
                    picture: '',
                    token: '',
                },
                {
                    _id: '12345',
                    username: 'Pietje',
                    email: 'pietje@gmail.com',
                    picture: '',
                    token: '',
                },
            ],
        };

        const result = getFriendsUsername(data);
        expect(result).toBe(friendsUsername);
    });
});
