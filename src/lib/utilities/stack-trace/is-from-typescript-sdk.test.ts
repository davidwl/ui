import { describe, expect, it } from 'vitest';
import { isFromTypeScriptSDK } from './is-from-typescript-sdk';
import UnixTypeScriptStacktraceQueryJson from '../../../fixtures/stacktrace-query.ts-sdk.json';
import WindowsTypeScriptStacktraceQueryJson from '../../../fixtures/stacktrace-query.ts-sdk.windows.json';
import GoStacktraceQueryJson from '../../../fixtures/stacktrace-query.go-sdk.json';
import JavaStacktraceQueryJson from '../../../fixtures/stacktrace-query.java-sdk.json';

describe('isFromTypeScripSDK', () => {
  it('should return true for a stacktrace generated by TypeScipt SDK on a Unix System', () => {
    const stackTraceText: string =
      UnixTypeScriptStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromTypeScriptSDK(stackTraceText);
    expect(result).toBe(true);
  });
  it('should return true for a stacktrace generated by TypeScipt SDK on a Windows System', () => {
    const stackTraceText: string =
      WindowsTypeScriptStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromTypeScriptSDK(stackTraceText);
    expect(result).toBe(true);
  });
  it('should return false for a stacktrace generated by GO SDK', () => {
    const stackTraceText: string =
      GoStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromTypeScriptSDK(stackTraceText);
    expect(result).toBe(false);
  });
  it('should return false for a stacktrace generated by Java SDK', () => {
    const stackTraceText: string =
      JavaStacktraceQueryJson.queryResult.payloads[0].data;
    const result: boolean = isFromTypeScriptSDK(stackTraceText);
    expect(result).toBe(false);
  });
});