import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { colors } from '../constants/theme';

const SmileyGif = () => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: 'transparent' }}>
      <Image
        source={{
          uri:
            'https://static.skaip.org/img/emoticons/180x180/f6fcff/smilerobot.gif',
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

const ChatWithTink = (props) => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Hey, ${props.route.params.name}! I'm Tink`,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Tink',
        avatar:
          'https://i.pinimg.com/736x/fd/a1/3b/fda13b9d6d88f25a9d968901d319216a.jpg',
      },
    },
  ]);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        placeholder="Type your message here..."
        renderUsernameOnMessage
        renderAvatar={(props) => (
          <View style={{ marginRight: 5 }}>
            <Image
              {...props}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
        )}
        renderSend={(props) => (
          <SmileyGif />
        )}
        scrollToBottom
        bottomOffset={100}
        onPressAvatar={(user) => console.log('User selected', user)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatWithTink;
