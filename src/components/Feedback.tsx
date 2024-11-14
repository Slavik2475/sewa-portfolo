import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { MessageSquare, Star, ThumbsUp } from 'lucide-react';

export default function Feedback() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'), limit(6));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFeedbacks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        name,
        comment,
        rating,
        timestamp: new Date()
      });
      setName('');
      setComment('');
      setRating(5);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-violet-400" />
          <h2 className="text-4xl font-bold mb-4">User Feedback</h2>
          <p className="text-gray-400">Your thoughts help me improve and grow</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Leave Your Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-violet-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                      <Star className="w-6 h-6" fill={star <= rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-violet-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">{feedback.name}</h4>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: feedback.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400">{feedback.comment}</p>
                <div className="mt-4 flex items-center gap-2 text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Verified User</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}