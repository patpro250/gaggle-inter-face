import api from "../axios";

const headers = {
  "x-auth-token":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWJyYXJpYW5JZCI6IjkwNWY5MWM0LWViYjgtNGI3OS1iMDVmLThiMWJhNzgxYTYzZSIsImluc3RpdHV0aW9uSWQiOiI0MmU0MjQ4Yi02N2UzLTQ1NjctOTkzNy03OGU1NGRhMjRlZGQiLCJsaWJyYXJ5SWQiOiI1NzI5ZjNjYi1mYTRlLTRhOGItODA1MC1lNDczNTc0ZjkwZDkiLCJmaXJzdE5hbWUiOiJJWkVSRSIsImxhc3ROYW1lIjoiUnlhbiIsImVtYWlsIjoicnlhbkBnbWFpbC5jb20iLCJwcm9maWxlIjpudWxsLCJzdGF0dXMiOiJBQ1RJVkUiLCJnZW5kZXIiOiJNIiwicGhvbmUiOiIrMjUwNjA5NzA5ODkwIiwicm9sZSI6Ik1BTkFHRVIiLCJwZXJtaXNzaW9ucyI6W10sImNyZWF0ZWRBdCI6IjIwMjUtMDQtMThUMTk6MjI6MDcuMDA0WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDQtMTlUMDc6MTM6NDguMDYwWiIsInBsYW4iOiJCYXNpYyIsImxpbWl0YXRpb25zIjp7ImJvb2tzIjoyMDAwLCJyZXBvcnRzIjoibGFzdCAzMCBkYXlzIiwic3VwcG9ydCI6ImVtYWlsLW9ubHkiLCJicmFuY2hlcyI6MSwiZGFzaGJvYXJkIjoiYmFzaWMiLCJsaWJyYXJpYW5zIjoxLCJhdXRvQ29kZUdlbmVyYXRpb25MaW1pdCI6MTB9LCJwdXJjaGFzZVN0YXR1cyI6IkFDVElWRSIsImV4cGlyYXRpb25EYXRlIjoiMjAyNS0wNS0xOFQxODoyNzoxMy4wMDFaIiwiaWF0IjoxNzQ1Mjc1ODM0fQ.67IqNSIslcWG3qbn81iULPqyOibu78xsvm_WzCpR-Fg",
};

export async function get(url: string) {
  try {
    const response = await api.get(url, { headers });
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (ex) {
    console.log(ex);
    return null;
  }
}
