-- Backend Validation Query for User 101
-- Executed prior to UI automation to verify entity existence and role state
SELECT id, email, name, role 
FROM users 
WHERE id = '101';
