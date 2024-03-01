// Efficient Meeting Scheduler
// Problem Statement:
// You are developing a feature for a calendar application that helps users find available meeting times. Your task is to implement a MeetingScheduler class that supports the following operations:

// schedule(start, end): Adds a new meeting to the calendar. The start and end parameters are integers representing the start time and end time of the meeting (in a 24-hour format). This method should return true if the meeting was successfully scheduled without any conflicts, and false otherwise.

// findAvailableSlots(duration, start, end): Finds all available slots in the calendar that can accommodate a meeting of duration minutes, within the specified start and end times. This method should return a list of available slots, where each slot is represented by a tuple (availableStart, availableEnd).

// Meetings cannot overlap, but they can start immediately after another meeting ends. For simplicity, assume that all times are in minutes from the start of the day (e.g., 9:00 AM is represented as 540).

// Constraints:
// 0 ≤ start < end ≤ 24 * 60
// 1 ≤ duration ≤ 24 * 60
// The number of calls to schedule and findAvailableSlots will not exceed 104.

function createMeetingScheduler() {
    let meetings = []; // Closure to store meetings

    function schedule(start, end) {
        // Check for conflicts with existing meetings
        for (const meeting of meetings) {
            if (start < meeting.end && end > meeting.start) {
                // There is a conflict, meeting cannot be scheduled
                return false;
            }
        }

        // No conflicts, schedule the meeting
        meetings.push({ start, end });
        return true;
    }

    function findAvailableSlots(duration, start, end) {
        const availableSlots = [];
        let currentStart = start;

        // Sort meetings by start time
        meetings.sort((a, b) => a.start - b.start);

        // Check for available slots between meetings
        for (const meeting of meetings) {
            if (currentStart + duration <= meeting.start) {
                availableSlots.push([currentStart, meeting.start]);
            }
            currentStart = Math.max(currentStart, meeting.end);
        }

        // Check for available slots after the last meeting
        if (currentStart + duration <= end) {
            availableSlots.push([currentStart, end]);
        }

        // Output the result in the desired format
        console.log(JSON.stringify(availableSlots));
    }

    return { schedule, findAvailableSlots };
}

const scheduler = createMeetingScheduler();

// Schedule some meetings
scheduler.schedule(60, 120);  // Meeting scheduled from 1:00 to 2:00
scheduler.schedule(150, 180); // Meeting scheduled from 2:30 to 3:00

// Find available slots
scheduler.findAvailableSlots(30, 0, 240);
// Expected Output: [[0,60],[120,150],[180,240]]
// Explanation: Shows available slots before the first meeting, between the two meetings, and after the last meeting within the specified range.
