import React from 'react';
import { Pressable, Text, View } from 'react-native';
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
    <View style={styles.commentContainer}>
      <View style={styles.commentProfile}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>{commentItem.username[0]}</Text>
        </View>
        <Text style={styles.mediumText}>{commentItem.username}</Text>
      </View>
      <Text style={styles.bigText}>{commentItem.body}</Text>
    </View>
  )
};

export default CommentCard;