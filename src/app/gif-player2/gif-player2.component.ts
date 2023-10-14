import { Component, EffectRef, ElementRef, Input, Signal, ViewChild, WritableSignal, computed, effect, signal } from '@angular/core';
import { GifPlayerStatus, GifPlayerState } from '../gif-player/gif-player.component1';

@Component({
  selector: 'app-gif-player2',
  templateUrl: './gif-player2.component.html',
  styleUrls: ['./gif-player2.component.scss']
})
export class GifPlayer2Component {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) thumbnail!: string;
  @ViewChild('gifPlayer') videoRef?: ElementRef<HTMLVideoElement>

  video: WritableSignal<HTMLVideoElement | undefined> = signal(undefined);
  loadStarted: WritableSignal<boolean> = signal(false);
  loadedData: WritableSignal<boolean> = signal(false);
  togglePlay: WritableSignal<boolean> = signal(false);

  isInitialized: Signal<boolean> = computed(() => this.video !== undefined);

  loadVideoEffectRef : EffectRef = effect(() => 
    (this.isInitialized() && !this.loadStarted()) ? this.video()?.load() : null
  );

  playPauseEffectRef: EffectRef = effect(() => 
    this.togglePlay() ? this.video()?.play() : this.video()?.pause()
  );

  constructor() { }

  ngAfterViewInit(): void {
    this.video.set(this.videoRef!.nativeElement);
  }
}
