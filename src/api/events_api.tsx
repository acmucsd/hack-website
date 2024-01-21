// Modified from https://github.com/acmucsd/main-website/blob/main/src/api/EventsAPI.ts
const EVENT_API = 'https://api.acmucsd.com/api/v2/event';

export type EventObject = {
  uuid: string;
  organization: string;
  committee: string;
  cover: string;
  title: string;
  description: string;
  location: string;
  eventLink?: string;
  start: string;
  end: string;
  pointValue: number;
  requiresStaff: boolean;
  staffPointBonus: number;
};

export type EventsArray = EventObject[];

export type EventsResponse = {
  error: unknown;
  events: EventsArray;
};

export type EventResponse = {
  error: unknown;
  event: EventObject;
};

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

const getAllHackEvents = async (
  type: 'past' | 'future' | '' = ''
): Promise<EventsArray | undefined> => {
  const api_url = `${EVENT_API}/${type}`;

  try {
    const response: Response = await fetch(api_url);
    const result: EventsResponse = await handleErrors(response);
    const filteredEvents = result.events.filter(event => event.committee === 'Hack' || event.title.includes('Hack School'));
    // const hackSchool = result.events.filter(event => event.title.includes('Hack School'));
    return filteredEvents;
  } catch (error) {
    return undefined;
  }
};

const getHackEvent = async (uuid: string): Promise<EventObject | undefined> => {
  const api_url = `${EVENT_API}/${uuid}`;

  try {
    const response: any = await fetch(api_url);
    const result: EventResponse = await handleErrors(response);
    return result.event;
  } catch (error) {
    return undefined;
  }
};

export { getAllHackEvents, getHackEvent };
