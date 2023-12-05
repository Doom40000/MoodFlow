import React from 'react';
import { Modal, Pressable, Text, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Comments {
  commentId: number
  userId: number
  username: string
  body: string
  likes: number[]
}

interface CommentCardProps {
  commentItem: Comments
}

const CommentCard: React.FC<CommentCardProps> = ({ commentItem }) => {
  return (
    <View>
      <View>
        <Text>{commentItem.username}</Text>
        <Text>{commentItem.body}</Text>
      </View>
      <View>
        <Text>{commentItem.likes.length}</Text>
      </View>
    </View>
  )
};

export default CommentCard;