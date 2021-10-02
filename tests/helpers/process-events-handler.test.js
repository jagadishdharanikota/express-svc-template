import { jest } from '@jest/globals';
import logger from '../../src/shared/logger.js';
import processEventsHandler from '../../src/helpers/process-events-handler.js';

describe('Unit testing the server', () => {
  test('catches uncaughtException rejections', () => {
    const error = new Error('mock error');

    jest.spyOn(process, 'on').mockImplementation((event, handler) => {
      if (event === 'uncaughtException') {
        handler(error);
      }
    });
    jest.spyOn(logger, 'error').mockReturnValueOnce();

    processEventsHandler();
    expect(process.on).toBeCalledWith('uncaughtException', expect.any(Function));
    expect(logger.error).toHaveBeenCalledWith(`Uncaught exception occured: ${error}`);
  });
});
