"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthAndFetchMessages = async () => {
    try {
      const response = await fetch('/api/respo');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        await checkAuthAndFetchMessages();
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsLoggedIn(false);
      setMessages([]);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleDelete = async (id) => {
    // Optional: Add a confirmation dialog before deleting
    if (!confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const response = await fetch(`/api/respo/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted message from the state to update the UI
        setMessages(currentMessages => currentMessages.filter(msg => msg.id !== id));
      } else {
        alert('Failed to delete the message.');
      }
    } catch (error) {
      console.error('Delete failed', error);
      alert('An error occurred while deleting the message.');
    }
  };

  useEffect(() => {
    checkAuthAndFetchMessages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-accent">Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8 bg-subtle-background rounded-xl">
          <h2 className="text-2xl font-bold text-accent">Admin Login</h2>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="bg-accent hover:text-accent" type="submit">Login</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-accent">Messages</h1>
        <Button onClick={handleLogout} variant="outline" className="text-accent border-accent hover:bg-accent hover:text-surface-foreground">
          Logout
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-subtle-background p-6 rounded-xl flex flex-col justify-between break-words">
            <div>
              <h3 className="text-xl font-bold">{msg.firstName} {msg.lastName}</h3>
              <p className="text-surface/80">{msg.email}</p>
              <p className="text-surface/80">{msg.phoneNumber}</p>
              <p className="text-accent mt-2">{msg.service}</p>
              <p className="mt-4">{msg.message}</p>
              <p className="text-xs text-surface/60 mt-4">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
            <Button onClick={() => handleDelete(msg.id)} variant="destructive" className="mt-4 w-full">
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;