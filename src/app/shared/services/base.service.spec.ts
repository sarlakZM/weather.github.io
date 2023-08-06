import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [BaseService, { provide: 'baseUrl', useValue: '' }],
    });

    service = TestBed.inject<BaseService<any>>(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
