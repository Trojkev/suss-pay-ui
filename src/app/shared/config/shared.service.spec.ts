import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';


describe('ConfigService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});