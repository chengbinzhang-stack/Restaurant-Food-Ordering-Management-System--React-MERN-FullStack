import { jwtDecode } from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWZkZmQyMTc0YTU2ZDIzOGExODdjZTkiLCJpYXQiOjE3Nzg0ODg5MjYsImV4cCI6MTc3ODU3NTMyNn0.fVmbLshIPXGTvlHSmnjMSZfniVgjJAUbIcPhfVbh-Gc";

try {
  const decoded = jwtDecode(token);
  console.log("decoded:", decoded.sub);
} catch (e) {
  console.error("error:", e);
}