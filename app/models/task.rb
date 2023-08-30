class Task < ApplicationRecord
    validates :title, length: { minimum: 1 }, uniqueness: true
    validates :description, length: { minimum: 1 }
    validates :status, inclusion: ["pending", "in_progress", "completed", "suspended"]
end
